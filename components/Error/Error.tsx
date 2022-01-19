import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "../../lib/tailwind";

const Error = ({ dataType }: { dataType: string }) => (
  <SafeAreaView style={tw`h-full p-4 bg-gray-50`}>
    <View>
      <Text style={tw`text-gray-900 text-sm font-medium`}>
        An error occurred when trying to fetch ${dataType}
      </Text>
    </View>
  </SafeAreaView>
);

export default Error;
