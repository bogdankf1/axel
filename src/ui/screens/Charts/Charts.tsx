import React, { useCallback, useEffect, memo, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/core'
import { translateFunctionSelector } from '../../../app/language/selectors'
import colors from '../../theme/colors'
import fields from '../../../app/language/translations/translationKeys'
import ScreenWrapper from '../../components/ScreenWrapper/ScreenWrapper'
import { getCategories, getTopCategories } from '../../../app/categories/actions'
import { SCREEN_NAMES } from '../../../navigation/AppNavigator.constants'
import {
  ChartsScreenWrapper,
  ChartsInner,
  ChartsSection,
  ChartsSectionTitleBox,
  ChartsSectionTitle,
} from './styles'
import { Dimensions, Text, View } from 'react-native'
import { LineChart, PieChart } from 'react-native-chart-kit'
import { categoriesTopListSelector } from '../../../app/categories/selectors'
import { topQuestionsListSelector } from '../../../app/questions/selectors'
import { getTopQuestions } from '../../../app/questions/actions'

const data = [
  {
    name: 'IT',
    questions: 20,
    color: '#9c7813',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Science',
    questions: 30,
    color: '#c4ae65',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Learning',
    questions: 15,
    color: '#ff00ff',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Economics',
    questions: 25,
    color: '#00ccff',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Other',
    questions: 10,
    color: '#0f4',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
]

const Charts = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const t = useSelector(translateFunctionSelector)
  const topCategories = useSelector(categoriesTopListSelector)
  const topQuestions = useSelector(topQuestionsListSelector)

  const data = [
    {
      name: 'IT',
      questions: 20,
      color: '#9c7813',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Science',
      questions: 30,
      color: '#c4ae65',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Learning',
      questions: 15,
      color: '#ff00ff',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Economics',
      questions: 25,
      color: '#00ccff',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Other',
      questions: 10,
      color: '#0f4',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ]

  const questionsData = [
    {
      name: 'IT',
      questions: 20,
      color: '#139c25',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Science',
      questions: 30,
      color: '#c47065',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Learning',
      questions: 15,
      color: '#008cff',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Economics',
      questions: 25,
      color: '#bbff00d5',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Other',
      questions: 10,
      color: '#f700ff8b',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ]

  useEffect(() => {
    dispatch(getTopCategories())
    dispatch(getTopQuestions())
  }, [])

  const formattedData = useMemo(() => {
    return data.map((item, idx) => {
      return {
        ...item,
        name: topCategories[idx]?.title || '',
        // @ts-ignore
        questions: topCategories[idx]?.postsCount || 0,
      }
    })
  }, [data, topCategories])

  const formattedQuestionsData = useMemo(() => {
    return questionsData.map((item, idx) => {
      return {
        ...item,
        name: topQuestions[idx]?.title || '',
        // @ts-ignore
        likes: topQuestions[idx]?.likes || 0,
      }
    })
  }, [data, topCategories])

  return (
    <ScreenWrapper>
      <ChartsScreenWrapper>
        <ChartsInner>
          <ChartsSection>
            <ChartsSectionTitleBox>
              <ChartsSectionTitle>{t(fields.QUESTIONS_POPULARITY)}</ChartsSectionTitle>
            </ChartsSectionTitleBox>
            <PieChart
              data={formattedQuestionsData}
              width={Dimensions.get('window').width - 40}
              height={220}
              chartConfig={{
                color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
                strokeWidth: 2,
                barPercentage: 0.5,
                useShadowColorFromDataset: false,
              }}
              accessor={'likes'}
              backgroundColor={'transparent'}
              paddingLeft={'0'}
              center={[0, 5]}
            />
            {/* <ChartsSectionTitleBox>
              <ChartsSectionTitle>{'Users daily activity'}</ChartsSectionTitle>
            </ChartsSectionTitleBox>
            <LineChart
              data={{
                labels: ['04:00', '08:00', '12:00', '16:00', '20:00', '00:00'],
                datasets: [
                  {
                    data: [11, 21, 28, 15, 14, 11],
                  },
                ],
              }}
              width={Dimensions.get('window').width - 40} // from react-native
              height={220}
              // yAxisLabel="$"
              yAxisSuffix="%"
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: '#e26a00',
                backgroundGradientFrom: '#fb8c00',
                backgroundGradientTo: '#ffa726',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: '#ffa726',
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            /> */}
          </ChartsSection>
          <ChartsSection>
            <ChartsSectionTitleBox>
              <ChartsSectionTitle>{t(fields.CATEGORIES_POPULARITY)}</ChartsSectionTitle>
            </ChartsSectionTitleBox>
            <PieChart
              data={formattedData}
              width={Dimensions.get('window').width - 40}
              height={220}
              chartConfig={{
                color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
                strokeWidth: 2,
                barPercentage: 0.5,
                useShadowColorFromDataset: false,
              }}
              accessor={'questions'}
              backgroundColor={'transparent'}
              paddingLeft={'0'}
              center={[0, 5]}
            />
          </ChartsSection>
        </ChartsInner>
      </ChartsScreenWrapper>
    </ScreenWrapper>
  )
}

export default memo(Charts)
