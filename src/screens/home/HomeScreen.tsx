import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/types';
import {SearchBar} from './components/SearchBar';
import {PremiumBanner} from './components/PremiumBanner';
import {GetStartedCard} from './components/GetStartedCard';
import {CategoryCard} from './components/CategoryCard';
import P from '../../components/P';
import {PAGE_PADDING, W} from '../../utils';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {fetchQuestions} from '../../store/slices/questionsSlice';
import {fetchCategories} from '../../store/slices/categoriesSlice';
import type {AppDispatch, RootState} from '../../store';
import {colors} from '../../utils/colors';
import {headerBg} from '../../assets/pngs';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = () => {
  const {top} = useSafeAreaInsets();
  const greeting = 'Good Afternoon!';
  const dispatch = useDispatch<AppDispatch>();
  const {
    data: questions,
    loading: questionsLoading,
    error: questionsError,
  } = useSelector((state: RootState) => state.questions);
  const {
    data: categories,
    loading: categoriesLoading,
    error: categoriesError,
  } = useSelector((state: RootState) => state.categories);

  useEffect(() => {
    dispatch(fetchQuestions());
    dispatch(fetchCategories());
  }, [dispatch]);

  const renderGetStartedItem = ({item}: {item: (typeof questions)[0]}) => (
    <GetStartedCard
      title={item.title}
      image={{uri: item.image_uri}}
      onPress={() => {}}
    />
  );

  const renderCategoryItem = ({item}: {item: (typeof categories)[0]}) => (
    <View style={styles.categoryColumn}>
      <CategoryCard
        title={item.title}
        image={{uri: item.image.url}}
        onPress={() => {}}
      />
    </View>
  );

  const renderGetStartedContent = () => {
    if (questionsLoading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator color={colors.primary} />
        </View>
      );
    }

    if (questionsError) {
      return (
        <View style={styles.errorContainer}>
          <P size="l2" color={colors.text}>
            {questionsError}
          </P>
        </View>
      );
    }

    return (
      <FlatList
        data={questions}
        renderItem={renderGetStartedItem}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.getStartedList}
      />
    );
  };

  const renderCategoriesContent = () => {
    if (categoriesLoading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator color={colors.primary} />
        </View>
      );
    }

    if (categoriesError) {
      return (
        <View style={styles.errorContainer}>
          <P size="l2" color={colors.text}>
            {categoriesError}
          </P>
        </View>
      );
    }

    return (
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        numColumns={2}
        scrollEnabled={false}
        contentContainerStyle={styles.categoriesList}
        columnWrapperStyle={styles.categoryRow}
      />
    );
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <ImageBackground
        source={headerBg}
        style={[styles.header, {paddingTop: top + 3}]}>
        <P size="l3" color="#13231B" font="defaultR">
          Hi, plant lover!
        </P>
        <P size="l8" color="#13231B" font="defaultM" mt={6}>
          {greeting} ⛅️
        </P>
        <SearchBar />
      </ImageBackground>

      <View style={styles.content}>
        <View style={{paddingHorizontal: PAGE_PADDING}}>
          <PremiumBanner />
        </View>

        <View>
          <P
            style={{paddingLeft: PAGE_PADDING}}
            size="l3"
            color="#13231B"
            font="defaultM">
            Get Started
          </P>
          {renderGetStartedContent()}
        </View>

        <View style={{paddingHorizontal: PAGE_PADDING}}>
          {renderCategoriesContent()}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfafa',
  },
  header: {
    paddingHorizontal: PAGE_PADDING,
  },
  content: {
    flex: 1,
    gap: 24,
    paddingVertical: 24,
  },

  getStartedList: {
    paddingTop: 16,
    paddingHorizontal: PAGE_PADDING,
  },
  loadingContainer: {
    height: W(45),
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    height: W(45),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: PAGE_PADDING,
  },
  categoriesList: {
    paddingTop: 16,
    gap: 16,
  },
  categoryRow: {
    justifyContent: 'space-between',
  },
  categoryColumn: {
    width: '48%',
  },
});

export default HomeScreen;
