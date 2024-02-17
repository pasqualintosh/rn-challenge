import { styled } from 'nativewind';
import { Image, Pressable, Text, View } from 'react-native';

export const Wrapper = styled(View, 'flex flex-1 items-center justify-start');
export const Poster = styled(Image, 'w-32 h-32');
export const Title = styled(Text, 'text-black text-2xl text-center');
export const Overview = styled(Text, 'text-black text-xl text-center');

export const ButtonsWrapper = styled(
  View,
  'flex flex-row flex-1 items-center justify-start px-8 gap-x-2'
);
export const FavButton = styled(Pressable, ' bg-amber-200 rounded-md p-4 flex-1');
export const WatchButton = styled(Pressable, ' bg-amber-600 rounded-md p-4 flex-1');
export const LabelButton = styled(Text, 'text-black text-ml text-center');
