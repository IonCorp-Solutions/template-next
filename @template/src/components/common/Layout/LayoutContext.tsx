import * as React from 'react'
// import React = require('react');

interface LayoutState {
  displaySidebar: boolean;
}

interface LayoutContextValue extends LayoutState {
  openSidebar: () => void;
  closeSidebar: () => void;
  toggleSidebar: () => void;
}

const initialState: LayoutState = {
  displaySidebar: false,
}

enum ACTIONS {
  OPEN_SIDEBAR = 'OPEN_SIDEBAR',
  CLOSE_SIDEBAR = 'CLOSE_SIDEBAR',
}

type Action = | { type: ACTIONS.OPEN_SIDEBAR } | { type: ACTIONS.CLOSE_SIDEBAR };

const ACTIONS_REDUCERS: Record<ACTIONS, (state: LayoutState, action:Action) => LayoutState> = {
  [ACTIONS.OPEN_SIDEBAR]: (state) => ({
    ...state,
    displaySidebar: true
  }),
  [ACTIONS.CLOSE_SIDEBAR]: (state) => ({
    ...state,
    displaySidebar: false
  })
}

const LayoutContext = React.createContext<LayoutContextValue|undefined>(undefined)

LayoutContext.displayName = 'LayoutContext'

function layoutReducer(state: LayoutState, action: Action): LayoutState {
  const actionReducer = ACTIONS_REDUCERS[action.type]
  return actionReducer ? actionReducer(state, action) : state
}

interface LayoutProps {
  children: React.ReactNode;
}

function LayoutProvider( {children: children}: LayoutProps) {
  const [state, dispatch] = React.useReducer(layoutReducer, initialState)

  const openSidebar = React.useCallback(() => {
    dispatch({ type: ACTIONS.OPEN_SIDEBAR })
  }
  , [dispatch])

  const closeSidebar = React.useCallback(() => {
    dispatch({ type: ACTIONS.CLOSE_SIDEBAR })
  }
  , [dispatch])

  const toggleSidebar = React.useCallback(() => {
    if (state.displaySidebar) {
      closeSidebar()
    } else {
      openSidebar()
    }
  }
  , [state.displaySidebar, openSidebar, closeSidebar])

  const value = React.useMemo(() => ({
    ...state,
    openSidebar,
    closeSidebar,
    toggleSidebar,
  }), [state, openSidebar, closeSidebar, toggleSidebar])

  return (<LayoutContext.Provider value={value}>
    {children}
  </LayoutContext.Provider>)
}

export const useLayout = () => {
  const context = React.useContext(LayoutContext)
  if (context === undefined) {
    throw new Error('useLayout must be used within a LayoutProvider')
  }
  return context
}



export const ManageLayout = ({children: children}: LayoutProps) => (
  <LayoutProvider>
    {children}
  </LayoutProvider>
)

