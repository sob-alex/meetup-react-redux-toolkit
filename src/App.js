import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PostDetails from './features/comments/PostDetails';
import PostsList from './features/posts/PostsList';
import { Provider } from 'react-redux'; 
import { configureStore } from '@reduxjs/toolkit';
import postsSlice from './features/posts/postsSlice';
import commentsSlice from './features/comments/commentsSlice';

const store = configureStore({
  reducer: { posts: postsSlice, comments: commentsSlice },
});

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <Switch>
            <Route path='/post/:id' component={PostDetails} />
            <Route path='/' component={PostsList} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
