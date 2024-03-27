import { useSelector, useDispatch, Provider } from "react-redux";
import { setLogin } from '../redux/auth/AuthSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import parse from 'html-react-parser';
import { store } from '../redux/store/store';

export function LoginCheck() {
    const { isLogin } = useSelector((state: any) => state.auth)
    const dispatch = useDispatch();

    function handleAuth(type = 'logout') {
        if (type === 'logout' || type === 'login') {
            dispatch(setLogin({ isLogin: type == 'login' ? true : false }));
        }
    }

    return (    
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="card mt-3">
                        <div className="card-header">Status Login</div>
                        <div className="card-body">
                           {
                            isLogin ? [
                                ('<div class="alert alert success">Yay, berhasil login!!!</div>'),
                                <button key={""} className="btn btn-md btn-danger" onClick={() => handleAuth('logout')}>Log out</button>
                            ] : [
                                ('<div class="alert alert-dark">Anda telah logout!!!</div>'),
                                <button key={""} className="btn btn-md btn-danger" onClick={() => handleAuth('login')}>Log in</button>
                            ]
                           }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function App() {
    return (
        <Provider store={store}>
            <LoginCheck />
        </Provider>
    );
}

export default App;