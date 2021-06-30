import { connect } from "react-redux";
import PrivateRoute from "./PrivateRoute";

const mapStateToProps = (state, props) => {
  return {
    isLogin: state.auth.isLogin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
