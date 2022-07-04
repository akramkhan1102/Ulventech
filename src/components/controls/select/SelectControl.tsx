import React, { PureComponent } from "react";
import { connect } from 'react-redux';
import { IRootState } from "~/models";
import { View, Text, TextInput } from "react-native";
import styles from "./SelectControl.style";
import { IAuthFormRecord } from "~/models/IAuth";
import { base } from "../../../styles";
import SelectDropdown from 'react-native-select-dropdown'

interface IProps extends IAuthFormRecord {
    onChange: (param: Record<string, string>) => void
}

class SelectControl extends PureComponent<IProps> {
    static defaultProps = {
        value: ''
    }
    
    onSelect = (selectedItem: any, index: number) => {
        const { onChange, fieldName } = this.props;
        onChange({[fieldName]: selectedItem}) 
    }

    render () {
        const { value, type, fieldName, options } = this.props
        return (
            <View style={styles.container}>
                <Text style={base.label}>{fieldName}:</Text>
                <SelectDropdown
                    data={options}
                    onSelect={this.onSelect}
                    buttonStyle={styles.buttonStye}
                    buttonTextStyle={styles.buttonTextStyle}
                    defaultValue={value}
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(SelectControl)
  