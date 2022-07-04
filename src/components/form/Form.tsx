import React, { PureComponent } from "react";
import { connect } from 'react-redux';
import { IRootState, IAuthState } from "~/models";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { IAuthFormRecord, TControl } from "~/models/IAuth";
import { Controls } from "../controls";
import styles from "./Form.style";

interface IProps {
    data: IAuthFormRecord[],
    onSubmit: (param: Record<string, string>) => void
    onRefresh: () => void;
    loading: boolean;
}
interface IState {
    formData: Record<string, string>
}
class Form extends PureComponent<IProps, IState> {
    
    state = {
        formData: {}
    }

    renderItem = ({ item }: { item: IAuthFormRecord }) => {
        const Control: { [key in TControl]: any } = {
            text: <Controls.TextControl {...item} onChange={this.onChange} onSubmit={this.onSubmit}/>,
            email: <Controls.TextControl {...item} onChange={this.onChange} onSubmit={this.onSubmit}/>,
            number: <Controls.TextControl {...item} onChange={this.onChange} onSubmit={this.onSubmit}/>,
            multiline: <Controls.TextControl {...item} onChange={this.onChange} onSubmit={this.onSubmit}/>,
            select: <Controls.SelectControl {...item} onChange={this.onChange}/>,
        }
       return  Control[item.type];
    }

    

    onChange = (param: Record<string, string>) => {
        this.setState({ formData: { ...this.state.formData, ...param } })
    }

    onSubmit = () => {
        const { data, onSubmit } = this.props;
        const formData: Record<string, string> = data.reduce((p, c) => { return { ...p, [c.fieldName] : c.value }    }, {})
        onSubmit({ ...formData, ...this.state.formData })

    }

    onRefresh = () => {
        this.props.onRefresh()
    }

    footer = () => {
        return <TouchableOpacity style={styles.button} onPress={this.onSubmit}><Text style={styles.buttonText}>Submit</Text></TouchableOpacity>
    }

    render () {
        const { data, loading } = this.props;
        console.log(this.state);
        
        return (
            <View>
                <FlatList
                    data={data}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index}
                    refreshing={loading}
                    onRefresh={this.onRefresh}
                    ListFooterComponent={this.footer}
                />
                
            </View>
        )
    }
}

  
  export default Form
  