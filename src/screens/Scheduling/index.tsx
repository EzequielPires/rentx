import React from 'react';
import { useTheme } from 'styled-components';
import { StatusBar } from 'react-native';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';
import { BackButton } from '../../components/BackButton';

import ArrowSvg from '../../assets/arrow.svg'
import {
    Container,
    Header,
    Title,
    RentalPeriod,
    DateInfo,
    DateTitle,
    DateValue,
    Content,
    Footer,
} from './styles'

export function Scheduling() {
    const theme = useTheme();
    return (
        <Container>
            <StatusBar
                barStyle={"light-content"}
                translucent
                backgroundColor={"transparent"}
            />
            <Header>
                <BackButton color={theme.colors.shape} />
                <Title>
                    Escolha uma {'\n'}data de início e {'\n'}fim do aluguel
                </Title>
                <RentalPeriod>
                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue selected={true}>18/05/2022</DateValue>
                    </DateInfo>
                    <ArrowSvg />
                    <DateInfo>
                        <DateTitle>ATÉ</DateTitle>
                        <DateValue selected={false}></DateValue>
                    </DateInfo>
                </RentalPeriod>
            </Header>

            <Content>
                <Calendar />
            </Content>
            <Footer>
                <Button title='Confirmar' />
            </Footer>
        </Container>
    );
}