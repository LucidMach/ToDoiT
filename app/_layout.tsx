import { SplashScreen, Stack } from "expo-router";
import { categoriesAtom } from "@/atoms/config";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { fetchData } from "@/utils/storage";

const RootLayout: React.FC = () => {
  const [categoryList, setCategoryList] = useAtom(categoriesAtom);

  // Prevent the splash screen from auto-hiding before asset loading is complete.
  SplashScreen.preventAutoHideAsync();

  const getLocalData = async () => {
    try {
      setCategoryList(await fetchData("categories"));
      console.log("data from local store:", categoryList);
      SplashScreen.hideAsync();
    } catch (e) {
      alert(e);
    } finally {
      await setTimeout(() => SplashScreen.hideAsync(), 1000);
    }
  };

  useEffect(() => {
    getLocalData();
  }, []);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
