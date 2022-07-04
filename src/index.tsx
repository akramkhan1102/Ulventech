import React, { PureComponent } from "react";
import { Provider, connect } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Router } from "./router";
import { IRootState } from "./models";
import { SafeAreaView } from "react-native";
import apiServices from "./services/apiServices";
import { Loading } from "./components/loading";

interface IProps {
  loading: boolean
}

class Root extends PureComponent<IProps> {
    state = {
        loading: true
    }
    componentDidMount () {
        this.setState({ loading: false })
        apiServices.init()
    }
    render () {
        const { persistor, store, loading } = this.props
        return (
          
            <SafeAreaView style={{ flex: 1 }}>
              {/* {
                loading || true && (
                  <Loading />
                )
              } */}
            <Provider store={store}>
              <PersistGate loading={this.state.loading} persistor={persistor}>
                <Router/>
              </PersistGate>
            </Provider>
          </SafeAreaView>
        )
    }
}

const mapStateToProps = (state: IRootState) => ({
    auth: state.auth,
    loading: state.core?.loading
  });
  
  
  const mapDispatchToProps = {
  
  };

export default connect(mapStateToProps, mapDispatchToProps)(Root)