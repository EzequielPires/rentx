import React from 'react';

import { Feather } from '@expo/vector-icons';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import SpeedSvg from '../../assets/speed.svg';
import AccelerationSvg from '../../assets/acceleration.svg';
import ForceSvg from '../../assets/force.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import ExchangeSvg from '../../assets/exchange.svg';
import PeopleSvg from '../../assets/people.svg';

import {
   Container,
   Header,
   CarImages,
   Content,
   Details,
   Description,
   Brand,
   Name,
   Rent,
   Period,
   Price,
   Accessories,
   Footer,
   RentalPeriod,
   CalendarIcon,
   DateInfo,
   DateTitle,
   DateValue,
   RentalPrice,
   RentalPriceLabel,
   RentalPriceDetails,
   RentalPriceQuota,
   RentalPriceTotal
} from './styles'
import { Button } from '../../components/Button';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

export function SchedulingDetails() {
   const theme = useTheme();
   return (
      <Container>
         <Header>
            <BackButton />
         </Header>
         <CarImages>
            <ImageSlider imagesUrl={['https://www.webmotors.com.br/imagens/prod/348415/AUDI_RS5_2.9_V6_TFSI_GASOLINA_SPORTBACK_QUATTRO_STRONIC_34841515342559092.webp?s=fill&w=236&h=135&q=70&t=true', 'https://www.webmotors.com.br/imagens/prod/348415/AUDI_RS5_2.9_V6_TFSI_GASOLINA_SPORTBACK_QUATTRO_STRONIC_34841515342559092.webp?s=fill&w=236&h=135&q=70&t=true']} />
         </CarImages>
         <Content>
            <Details>
               <Description>
                  <Brand>Lamborghini</Brand>
                  <Name>Huracan</Name>
               </Description>
               <Rent>
                  <Period>Ao dia</Period>
                  <Price>R$ 580</Price>
               </Rent>
            </Details>
            <Accessories>
               <Accessory
                  name='380Km/h'
                  icon={SpeedSvg}
               />
               <Accessory
                  name='3.2s'
                  icon={AccelerationSvg}
               />
               <Accessory
                  name='800 HP'
                  icon={ForceSvg}
               />
               <Accessory
                  name='Gasolina'
                  icon={GasolineSvg}
               />
               <Accessory
                  name='Auto'
                  icon={ExchangeSvg}
               />
               <Accessory
                  name='2 pessoas'
                  icon={PeopleSvg}
               />
            </Accessories>
            <RentalPeriod>
               <CalendarIcon>
                  <Feather
                     name="calendar"
                     size={RFValue(24)}
                     color={theme.colors.shape}
                  />
               </CalendarIcon>
               <DateInfo>
                  <DateTitle>DE</DateTitle>
                  <DateValue>18/06/2021</DateValue>
               </DateInfo>
               <Feather
                  name="chevron-right"
                  size={RFValue(10)}
                  color={theme.colors.text}
               />
               <DateInfo>
                  <DateTitle>DE</DateTitle>
                  <DateValue>18/06/2021</DateValue>
               </DateInfo>
            </RentalPeriod>
            <RentalPrice>
               <RentalPriceLabel>TOTAL</RentalPriceLabel>
               <RentalPriceDetails>
                  <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
                  <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
               </RentalPriceDetails>
            </RentalPrice>
         </Content>
         <Footer>
            <Button
               title='Confirmar'
            />
         </Footer>
      </Container>
   );
}