import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Routes, Route } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import PostCreateForm from "./pages/posts/PostCreateForm";
import PostPage from "./pages/posts/PostPage";
import PostsPage from "./pages/posts/PostsPage";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import PostEditForm from "./pages/posts/PostEditForm";
import ProfilePage from "./pages/profiles/ProfilePage";
import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import NotFound from "./components/NotFound";

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Routes>
          <Route
            exact="true"
            path="/"
            element={
              <PostsPage message="Sorry, no results were found. Please adjust your search keyword." />
            }
          />
          <Route
            exact="true"
            path="/feed"
            element={
              <PostsPage
                message="Apologies, no results found. Please adjust your search keyword or follow a user."
                filter={`owner__followed__owner__profile=${profile_id}&`}
              />
            }
          />
          <Route
            exact="true"
            path="/liked"
            element={
              <PostsPage
                message="Sorry, no results were found. Please adjust your search keyword or like a post."
                filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`}
              />
            }
          />
          <Route exact="true" path="/signin" element={<SignInForm />} />
          <Route exact="true" path="/signup" element={<SignUpForm />} />
          <Route exact="true" path="/posts/create" element={<PostCreateForm />} />
          <Route exact="true" path="/posts/:id" element={<PostPage />} />
          <Route exact="true" path="/posts/:id/edit" element={<PostEditForm />} />
          <Route exact="true" path="/profiles/:id" element={<ProfilePage />} />
          <Route
            exact="true"
            path="/profiles/:id/edit/username"
            element={<UsernameForm />}
          />
          <Route
            exact="true"
            path="/profiles/:id/edit/password"
            element={<UserPasswordForm />}
          />
          <Route
            exact="true"
            path="/profiles/:id/edit"
            element={<ProfileEditForm />}
          />

          <Route element={<NotFound />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;