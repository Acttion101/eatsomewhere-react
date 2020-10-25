import React, {
  createContext,
  useContext,
  useEffect,
  useCallback,
  useReducer,
  useMemo
} from 'react'

const ActionContext = createContext({})
const INITAIL_STATE = []
function reducer (state, action) {
  switch (action.type) {
    case 'INIT':
      return action.payload || []
    case 'ADD':
      return [
        ...state,
        {
          id: Date.now(),
          content: action.payload,
          type: Constants.types.comment
        }
      ]

    default:
      return state
  }
}

export function Provider ({ children }) {
  const [comments, dispatch] = useReducer(reducer, INITAIL_STATE)
  return (
    <ActionContext.Provider value={{ comments, dispatch }}>
      {children}
    </ActionContext.Provider>
  )
}
const Constants = {
  store: 'comments',
  types: {
    comment: 'comment'
  }
}
export function useComment () {
  const { comments, dispatch } = useContext(ActionContext)
  const handleAddComment = useCallback(
    commentInput => dispatch({ type: 'ADD', payload: commentInput }),
    [dispatch]
  )

  useEffect(() => {
    if (!comments.length) {
      dispatch({
        type: 'INIT',
        payload: JSON.parse(window.localStorage.getItem(Constants.store))
      })
    }
  }, [dispatch, comments.length])

  useEffect(() => {
    if (comments.length) {
      window.localStorage.setItem(Constants.store, JSON.stringify(comments))
    }
  }, [comments])

  const state = useMemo(
    () => ({
      comments: comments.filter(
        comment => comment.type === Constants.types.comment
      )
    }),
    [comments]
  )

  const dispatcher = useMemo(
    () => ({
      handleAddComment
    }),
    [handleAddComment]
  )

  return [state, dispatcher]
}
export default ActionContext
