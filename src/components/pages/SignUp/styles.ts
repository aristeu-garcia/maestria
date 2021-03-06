import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Animated } from 'react-native';

export const Container = styled(Animated.View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
 
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ForgotPasswordText = styled.Text`
  color: #070417;
  font-size: 16px;
  font-family: Rubik_400Regular;
`;

export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: #fafaff;
  border-top-width: 1px;
  border-color: #fafaff;
  padding: 16px 0 ${16 + getBottomSpace()}px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const CreateAccountButtonText = styled.Text`
  color: #070417;
  font-size: 18px;
  font-family: Rubik_400Regular;
  margin-left: 16px;
`;
