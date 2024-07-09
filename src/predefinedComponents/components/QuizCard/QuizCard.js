import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './QuizCard.styles';
import QuizOption from '../QuizOption/QuizOption';

const QuizCard = ({ data: { question, cards }, num, onPress, cardsAmount }) => {
  const [revealed, setRevealed] = useState(false);

  return (
    <TouchableOpacity onPress={onPress} style={styles.container} activeOpacity={0.95}>
      <View style={styles.labelContainer}>
        <View style={styles.labelTextContainer}>
          <Text style={styles.labelText}>{`${num + 1}/${cardsAmount}`}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.mainText}>{question}</Text>
      </View>
      {cards.map((card) => (
        <QuizOption
          key={card.question}
          reveal={() => {
            setRevealed(true);
          }}
          revealed={revealed}
          card={card}
        />
      ))}
    </TouchableOpacity>
  );
};


export default QuizCard;
