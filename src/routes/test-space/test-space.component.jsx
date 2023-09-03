import { useEffect } from "react";
import "./test-space.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  // fetchRandomDataAsync,
  randomActions,
} from "../../store/random/random.action";
import { selectCurrentUser } from "../../store/random/random.selector";
import Button from "../../components/button/button.component";

const TestSpace = () => {
  const { data, isLoading, error } = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const popLastItem = () => {
    dispatch(randomActions.randomDataPop());
  };

  useEffect(() => {
    //both of these lines for thunk
    //fetchRandomDataAsync()(dispatch); same as below line
    //dispatch(fetchRandomDataAsync());
    //for saga
    dispatch(randomActions.fetchRandomStart());
  }, []);

  return isLoading ? (
    <p>Loading . . </p>
  ) : (
    <>
      <div className="random-data-container">
        {error ? (
          <p>{JSON.stringify(error)}</p>
        ) : (
          data?.map(({ character: { mal_id, name } }, index) => (
            <div className="data-inner-container" key={mal_id + "" + index}>
              <p>{name}</p>
            </div>
          ))
        )}
      </div>
      <div className="random-button-container">
        <Button onClick={popLastItem}>POP</Button>
      </div>
    </>
  );
};

export default TestSpace;
