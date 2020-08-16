import React from 'react';
import { Label, Input, Text, Item } from 'native-base';
import { MaskService } from 'react-native-masked-text';
import styles from './styles';

const Field = (props) => {
  const {
    name = '',
    options,
    textArea,
    label = '',
    keyboard,
    image,
    disabled,
    mask,
    formik = {},
    onChange = () => {},
  } = props;

  const error =
    formik.errors[name] && (formik.touched[name] || formik.values[name].length);

  if (mask) {
    return (
      <React.Fragment>
        <Item input floatingLabel disabled={disabled}>
          <Label>{label}</Label>
          <Input
            autoCapitalize="none"
            value={MaskService.toMask(mask, formik.values[name])}
            onChangeText={formik.handleChange(name)}
            onBlur={() => formik.setFieldTouched(name)}
            onChange={onChange}
            keyboardType={keyboard}
            {...props}
          />
        </Item>
        <Text style={styles.text}>{error ? formik.errors[name] : ''}</Text>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <Item style={styles.item} input floatingLabel disabled={disabled}>
        <Label>{label}</Label>
        <Input
          autoCapitalize="none"
          value={formik.values[name]}
          onChangeText={formik.handleChange(name)}
          onBlur={() => formik.setFieldTouched(name)}
          onChange={onChange}
          keyboardType={keyboard}
          {...props}
        />
      </Item>
      <Text style={styles.text}>{error ? formik.errors[name] : ''}</Text>
    </React.Fragment>
  );
};

export default Field;
