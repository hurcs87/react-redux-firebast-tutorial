const initState = {
  projects: [
    { id: '1', title: 'Project 1', content: 'This is content for project 1' },
    { id: '2', title: 'Project 2', content: 'This is content for project 2' },
    { id: '3', title: 'Project 3', content: 'This is content for project 3' }
  ]
}

const projectReducer = (state = initState, action) => {
  return state
}

export default projectReducer