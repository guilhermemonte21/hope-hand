import React, { useState } from 'react';
import { Platform } from 'react-native';
import {
    MainBox,
    Number,
    Styles
} from './Style'

import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const numeroCelulas = 4;

export const InputCode = () => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: numeroCelulas });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    return (
        <MainBox>
            <CodeField
                ref={ref}
                {...props}
                // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                value={value}
                onChangeText={setValue}
                cellCount={numeroCelulas}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                autoComplete={Platform.select({ android: 'sms-otp', default: 'one-time-code' })}
                testID="my-code-input"
                renderCell={({ index, symbol, isFocused }) => (
                    <Number
                        key={index}
                        style={isFocused && Styles.focusCell}
                        onLayout={getCellOnLayoutHandler(index)}
                    >
                        {symbol || (isFocused ? <Cursor /> : null)}
                    </Number>
                )}
            />
        </MainBox>
    );
};