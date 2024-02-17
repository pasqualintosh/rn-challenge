import { styled } from 'nativewind';
import { Image, Pressable, Text } from 'react-native';

export const Row = styled(Pressable, 'flex-row justify-between items-center w-full');
export const Poster = styled(Image, 'w-14 h-14');
export const Label = styled(Text, 'text-black text-xl');
