import React, { PureComponent } from "react";
import { connect } from 'react-redux';
import { IRootState, IAuthState } from "~/models";
import { View, Text } from "react-native";
import { Controls, Form } from "../../../../components";
import auth from "../../../../store/auth";

interface IProps {
    getForm: () => void;
    auth: IAuthState;
    postForm: (param: Record<string, string>) => void;
    onRefresh: () => void;
    loading: boolean
}
class Home extends PureComponent<IProps> {

    componentDidMount () {
        this.onRefresh()
    }

    onSubmit = (param: Record<string, string>) => {
        console.log('param', param);
        
        this.props.postForm(param)
    }

    onRefresh = () => {
        this.props.getForm()
    }

    render () {
        console.log(this.props);
        const { auth, loading } = this.props
        return (
            <View>
                <Form 
                    data={auth.form} 
                    onSubmit={this.onSubmit} 
                    onRefresh={this.onRefresh}
                    loading={loading}
                />
            </View>
        )
    }
}

const mapStateToProps = (state: IRootState) => ({
    auth: state.auth,
    loading: state.core.loading
  });
  
  
  const mapDispatchToProps = {
    getForm: auth.actions.getForm,
    postForm: auth.actions.postForm
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home)
  