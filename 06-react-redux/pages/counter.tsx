import { Provider, useDispatch, useSelector } from "react-redux";
import { tambahCounter, kurangCounter } from "@/redux/counter/upDown";
import { store } from "@/redux/store/store";

function CounterNaikTurun() {
    const { totalCounter } = useSelector((state: any) => state.counter)
    const dispatch = useDispatch();
    
     function tombolTambah() {
        dispatch(tambahCounter());
    }

    function tombolKurang() {
        if (totalCounter > 0) {
            dispatch(kurangCounter());
        } else {
            alert('Minimal 0');
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="card mt-3">
                        <div className="card-header">Total mobil saya</div>
                        <div className="row">
                            <div className="col-1 mt-2">Jumlah:</div>
                            <div className="input-group mb-3">
                                <button className="btn btn-outline-secondary" onClick={() => tombolKurang()}>
                                    -
                                </button>
                                <span className="form-control text-center">{totalCounter}</span>
                                <button className="btn btn-outline-secondary" onClick={() => tombolTambah()}>
                                    +
                                </button>
                            </div>
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
            <CounterNaikTurun />
        </Provider>
    );
}

export default App;