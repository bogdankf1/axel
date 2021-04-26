import React, { useCallback, useEffect, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/core'
import { translateFunctionSelector } from '../../../app/language/selectors'
import colors from '../../theme/colors'
import fields from '../../../app/language/translations/translationKeys'
import ScreenWrapper from '../../components/ScreenWrapper/ScreenWrapper'
import { getCategories } from '../../../app/categories/actions'
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

const data = [
  {
    name: 'IT',
    questions: 20,
    color: colors.green,
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Science',
    questions: 30,
    color: colors.lightBlue,
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Learning',
    questions: 15,
    color: colors.mint,
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Economics',
    questions: 25,
    color: colors.yellow,
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Other',
    questions: 10,
    color: colors.brightPurple,
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
]

const Charts = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const t = useSelector(translateFunctionSelector)
  return (
    <ScreenWrapper>
      <ChartsScreenWrapper>
        <ChartsInner>
          <ChartsSection>
            <ChartsSectionTitleBox>
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
            />
          </ChartsSection>
          <ChartsSection>
            <ChartsSectionTitleBox>
              <ChartsSectionTitle>{'Categories popularity'}</ChartsSectionTitle>
            </ChartsSectionTitleBox>
            <PieChart
              data={data}
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
