import React, { PureComponent } from "react";
import { connect } from 'react-redux';
import { IRootState } from "~/models";
import { View, Text, TextInput } from "react-native";
import styles from "./TextControl.style";
import { IAuthFormRecord } from "~/models/IAuth";
import { base } from "../../../styles";
import { Filter }  from "../../../utils";

interface IProps extends IAuthFormRecord {
    onChange: (param: Record<string, string>) => void
    onSubmit: () => void;
}

class TextControl extends PureComponent<IProps> {
    static defaultProps = {
        value: ''
    }
    state = {
        value: this.props.value
    }
    onChangeText = (value: string) => {
        const { onChange, fieldName } = this.props;
        this.setState({ value })
        onChange({[fieldName]: value}) 
    }   

    render () {
        const { onSubmit, type, fieldName } = this.props
        const keyboardType = {
            number: 'numeric',
            email: 'email-address',
            text: 'default'
        }
        return (
            <View style={styles.container}>
                <Text style={base.label}>{Filter.labelFilter(fieldName)}:</Text>
                 <TextInput
                    style={{...styles.input, ...type !== 'multiline' && {  height: 40 } }}
                    placeholder='TEXT INPUT'
                    value={this.state.value}
                    keyboardType={keyboardType[type]}
                    multiline={type === 'multiline'}
                    numberOfLines={5}
                    onChangeText={this.onChangeText}
                    onSubmitEditing={onSubmit}
                />
            </View>
        )
    }
}

const mapStateToProps = (state: IRootState) => ({
    auth: state.auth,
  });
  
  
  const mapDispatchToProps = {
  
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(TextControl)
  