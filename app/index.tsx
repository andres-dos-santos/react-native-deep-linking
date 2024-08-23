import { Text, View } from "react-native";
import { createURL, useURL } from "expo-linking";
import { Link } from "expo-router";

export default function Home() {
  const redirectURL = useURL();

  const url = createURL("product", {});
  console.log(url);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{redirectURL}</Text>

      <Link href="/product/123">
        <Text>Go to product</Text>
      </Link>
    </View>
  )
}