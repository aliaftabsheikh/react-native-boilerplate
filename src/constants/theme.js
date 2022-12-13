import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
import {RFValue} from 'react-native-responsive-fontsize';

export const COLORS = {
  primary: '#092143',
  secondary: '#DD3333',
  text_white: '#FAF9F9',
  primary_with_opacity: 'rgba(9, 33, 67,0.45)',
  secondary_with_opacity: 'rgba(221, 51, 51, 0.8)',
  primary_border: 'rgba(9, 33, 67,0.10)',
  sky_green: '#2C9F9A',
  medim_gray: '#E9ECF1',
  drawer_background: 'rgba(18, 55, 107, 0.97)',
  white_with_opacity: '#rgba(255, 255, 255, 0.9)',
  white: '#fff',
  black_with_opacity: 'rgba(0,0,0,0.8)',
  Light_black_with_opacity: 'rgba(0,0,0,0.3)',
  Light_blue: 'rgba(9, 33, 67, 0.7);',
  black: '#000000',
  light_gray: '#F5F7FA',
  lightest_gray: 'rgba(9, 33, 67, 0.11)',
  medium_blue: 'rgba(9, 15, 71, 0.45)',
  transparent: 'transparent',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  padding: 20,
  padding2: 12,

  // font sizes
  h9: 9,
  h10: 10,
  h11: 11,
  h12: 12,
  h13: 13,
  h14: 14,
  h15: 15,
  h16: 16,
  h17: 17,
  h18: 18,
  h19: 19,
  h20: 20,
  h21: 21,
  h22: 22,
  h24: 24,
  h25: 25,
  h27: 27,
  h28: 28,
  h30: 30,
  h32: 32,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  Bold32: {
    fontFamily: 'Poppins-Bold',
    fontSize: RFValue(SIZES.h32),
  },
  Bold27: {
    fontFamily: 'Poppins-Bold',
    fontSize: RFValue(SIZES.h27),
  },
  Bold24: {
    fontFamily: 'Poppins-Bold',
    fontSize: RFValue(SIZES.h24),
  },
  Bold22: {
    fontFamily: 'Poppins-Bold',
    fontSize: RFValue(SIZES.h22),
  },
  Bold20: {
    fontFamily: 'Poppins-Bold',
    fontSize: RFValue(SIZES.h20),
  },
  Bold19: {
    fontFamily: 'Poppins-Bold',
    fontSize: RFValue(SIZES.h19),
  },
  Bold18: {
    fontFamily: 'Poppins-Bold',
    fontSize: RFValue(SIZES.h18),
  },
  Bold17: {
    fontFamily: 'Poppins-Bold',
    fontSize: RFValue(SIZES.h17),
  },
  Bold16: {
    fontFamily: 'Poppins-Bold',
    fontSize: RFValue(SIZES.h16),
  },
  Bold15: {
    fontFamily: 'Poppins-Bold',
    fontSize: RFValue(SIZES.h15),
  },
  Bold14: {
    fontFamily: 'Poppins-Bold',
    fontSize: RFValue(SIZES.h14),
  },
  Bold13: {
    fontFamily: 'Poppins-Bold',
    fontSize: RFValue(SIZES.h13),
  },
  Bold12: {
    fontFamily: 'Poppins-Bold',
    fontSize: RFValue(SIZES.h12),
  },
  Bold11: {
    fontFamily: 'Poppins-Bold',
    fontSize: RFValue(SIZES.h11),
  },
  Bold10: {
    fontFamily: 'Poppins-Bold',
    fontSize: RFValue(SIZES.h10),
  },
  Bold9: {
    fontFamily: 'Poppins-Bold',
    fontSize: RFValue(SIZES.h9),
  },

  Medium28: {
    fontFamily: 'Poppins-Medium',
    fontSize: RFValue(SIZES.h28),
  },
  Medium25: {
    fontFamily: 'Poppins-Medium',
    fontSize: RFValue(SIZES.h25),
  },
  Medium24: {
    fontFamily: 'Poppins-Medium',
    fontSize: RFValue(SIZES.h24),
  },
  Medium21: {
    fontFamily: 'Poppins-Medium',
    fontSize: RFValue(SIZES.h21),
  },
  Medium19: {
    fontFamily: 'Poppins-Medium',
    fontSize: RFValue(SIZES.h19),
  },
  Medium18: {
    fontFamily: 'Poppins-Medium',
    fontSize: RFValue(SIZES.h18),
  },
  Medium16: {
    fontFamily: 'Poppins-Medium',
    fontSize: RFValue(SIZES.h16),
  },
  Medium15: {
    fontFamily: 'Poppins-Medium',
    fontSize: RFValue(SIZES.h15),
  },
  Medium14: {
    fontFamily: 'Poppins-Medium',
    fontSize: RFValue(SIZES.h14),
  },
  Medium13: {
    fontFamily: 'Poppins-Medium',
    fontSize: RFValue(SIZES.h13),
  },
  Medium12: {
    fontFamily: 'Poppins-Medium',
    fontSize: RFValue(SIZES.h12),
  },
  Medium11: {
    fontFamily: 'Poppins-Medium',
    fontSize: RFValue(SIZES.h11),
  },
  Medium10: {
    fontFamily: 'Poppins-Medium',
    fontSize: RFValue(SIZES.h10),
  },

  Regular32: {
    fontFamily: 'Poppins-Regular',
    fontSize: RFValue(SIZES.h32),
  },
  SylfaenRegular30: {
    fontFamily: 'sylfaen',
    fontSize: RFValue(SIZES.h30),
    fontWeight: '400',
  },
  Regular25: {
    fontFamily: 'Poppins-Regular',
    fontSize: RFValue(SIZES.h25),
  },
  Regular24: {
    fontFamily: 'Poppins-Regular',
    fontSize: RFValue(SIZES.h24),
  },
  Regular21: {
    fontFamily: 'Poppins-Regular',
    fontSize: RFValue(SIZES.h21),
  },
  Regular20: {
    fontFamily: 'Poppins-Regular',
    fontSize: RFValue(SIZES.h20),
  },
  Regular18: {
    fontFamily: 'Poppins-Regular',
    fontSize: RFValue(SIZES.h18),
  },
  Regular17: {
    fontFamily: 'Poppins-Regular',
    fontSize: RFValue(SIZES.h17),
  },
  Regular16: {
    fontFamily: 'Poppins-Regular',
    fontSize: RFValue(SIZES.h16),
  },
  Regular15: {
    fontFamily: 'Poppins-Regular',
    fontSize: RFValue(SIZES.h15),
  },
  Regular14: {
    fontFamily: 'Poppins-Regular',
    fontSize: RFValue(SIZES.h14),
  },
  Regular13: {
    fontFamily: 'Poppins-Regular',
    fontSize: RFValue(SIZES.h13),
  },
  Regular12: {
    fontFamily: 'Poppins-Regular',
    fontSize: RFValue(SIZES.h12),
  },
  Regular11: {
    fontFamily: 'Poppins-Regular',
    fontSize: RFValue(SIZES.h11),
  },
  Regular10: {
    fontFamily: 'Poppins-Regular',
    fontSize: RFValue(SIZES.h10),
  },
  Regular9: {
    fontFamily: 'Poppins-Regular',
    fontSize: RFValue(SIZES.h9),
  },

  Light21: {
    fontFamily: 'Poppins-Light',
    fontSize: RFValue(SIZES.h21),
  },
  Light20: {
    fontFamily: 'Poppins-Light',
    fontSize: RFValue(SIZES.h20),
  },
  Light16: {
    fontFamily: 'Poppins-Light',
    fontSize: RFValue(SIZES.h16),
  },
  Light15: {
    fontFamily: 'Poppins-Light',
    fontSize: RFValue(SIZES.h15),
  },
  Light14: {
    fontFamily: 'Poppins-Light',
    fontSize: RFValue(SIZES.h14),
  },
  Light13: {
    fontFamily: 'Poppins-Light',
    fontSize: RFValue(SIZES.h13),
  },
  Light12: {
    fontFamily: 'Poppins-Light',
    fontSize: RFValue(SIZES.h12),
  },
  Light11: {
    fontFamily: 'Poppins-Light',
    fontSize: RFValue(SIZES.h11),
  },
  Light10: {
    fontFamily: 'Poppins-Light',
    fontSize: RFValue(SIZES.h10),
  },
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
