import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
  useNavigate,
  Navigate,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLang, setLangCode } from 'features/langSlice';
import Home from 'pages/Home/Home';

function App() {
  const ModifiedRoute = ({ Component }) => {
    const { langCode } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = window.location.pathname;

    useEffect(() => {
      import(`./data/lang/${langCode}.json`)
        .then((data) => dispatch(setLang(data)))
        .catch(() => {
          navigate('/en');
        });

      dispatch(setLangCode(langCode));
    }, [location]);

    return <Component />;
  };

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Navigate to={'/cz'} />} />

        <Route
          exact
          path='/:langCode'
          element={<ModifiedRoute Component={Home} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
