import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Splash from './Splash';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, View, Text,ImageBackground } from 'react-native';
import Verse from './Verse';


var bg=require('./universe.jpg');
var img=require('./yinyang.jpg');

export default function Homepage({navigation}) {
  return (

    <ImageBackground source={bg} style={{height:'100%',width:'100%',}}>
    <View style={{ flex: 1, alignItems: '', justifyContent: '' }}>
     <Button color="rgba(52, 52, 52, 0.5)" title="Verse 1" onPress={() => navigation.push('Verse',{texts: 'The Great Way is not difficult for those who have no preferences Let go of longing and aversion, and it reveals itself'})}/>
     <Button color="rgba(52, 52, 52, 0.5)" title="Verse 2" onPress={() => navigation.push('Verse',{texts: 'Make the smallest distinction, however, and you are as far from it as heaven is from earth. If you want to realize the truth, then hold no opinions for or against anything. Like and dislike is the disease of the mind. When the deep meaning (of the Way) is not understood' })}/>
     <Button color="rgba(52, 52, 52, 0.5)" title="Verse 3" onPress={() => navigation.push('Verse',{texts: 'Like and dislike is the disease of the mind. When the deep meaning (of the Way) is not understood the intrinsic peace of mind is disturbed.'})}/>
     <Button color="rgba(52, 52, 52, 0.5)" title="Verse 4" onPress={() => navigation.push('Verse',{texts: 'As vast as infinite space, it is perfect and lacks nothing. Indeed, it is due to your grasping and repelling That you do not see things as they are' })}/>
     <Button color="rgba(52, 52, 52, 0.5)" title="Verse 5" onPress={() => navigation.push('Verse',{texts: 'Do not get entangled in things; Do not get lost in emptiness. Be still in the oneness of things and dualism vanishes by itself'})}/>
     <Button color="rgba(52, 52, 52, 0.5)" title="Verse 6" onPress={() => navigation.push('Verse',{texts: 'When you try to stop motion to achieve quietude, the very effort fills you with activity. As long as you hold on to opposites you will never know the One Way' })}/>
     <Button color="rgba(52, 52, 52, 0.5)" title="Verse 7" onPress={() => navigation.push('Verse',{texts: 'Those who do not understand the Way will assert or deny the reality of things. Deny the reality of things, you miss its deeper reality; Assert the reality of things, you miss the emptiness of all things.'})}/>
     <Button color="rgba(52, 52, 52, 0.5)" title="Verse 8" onPress={() => navigation.push('Verse',{texts: 'The more you think about it, the further you are from the truth. Cease all thinking, and there is nothing that will not be revealed to you.' })}/>
     <Button color="rgba(52, 52, 52, 0.5)" title="Verse 9" onPress={() => navigation.push('Verse',{texts: 'To return to the root is to find the essence, but to pursue appearances is to miss the Source. The moment you are enlightened, you go beyond appearances and emptiness.'})}/>
     <Button color="rgba(52, 52, 52, 0.5)" title="Verse 10" onPress={() => navigation.push('Verse',{texts: 'Changes that seem to occur in the (empty) world, appear real only because of ignorance. Do not search for the truth; only cease to cherish opinions' })}/>
     <Button color="rgba(52, 52, 52, 0.5)" title="Verse 11" onPress={() => navigation.push('Verse',{texts: 'Do not hold to dualistic views, avoid such habits carefully. If there is even a trace of right and wrong, the mind is lost in confusion.'})}/>
     <Button color="rgba(52, 52, 52, 0.5)" title="Verse 12" onPress={() => navigation.push('Verse',{texts: ' Although all dualities arise from the One, do not cling even to this One. When the mind exists undisturbed in the Way, everything is without fault. ' })}/>
     <Button color="rgba(52, 52, 52, 0.5)" title="Verse 13" onPress={() => navigation.push('Verse',{texts: 'When things can no longer be faulty, it is as if there are no things. When the mind can no longer be disturbed, it is as if there is no mind. When thought-objects vanish, the thinking-subject vanishes.When the mind vanishes, objects vanish.'})}/>
     <Button color="rgba(52, 52, 52, 0.5)" title="Verse 14" onPress={() => navigation.push('Verse',{texts: 'The arising of other gives rise to self; giving rise to self generates other. Know these seeming two facets as one Emptiness ' })}/>
     <Button color="rgba(52, 52, 52, 0.5)" title="Verse 15" onPress={() => navigation.push('Verse',{texts: 'In this Emptiness, the two are indistinguishable and each contains in itself the whole. When no discrimination is made between this and that, how can you prefer one to another?'})}/>
     <Button color="rgba(52, 52, 52, 0.5)" title="Verse 16" onPress={() => navigation.push('Verse',{texts: ' The Great Way is all-embracing,not easy, not difficult. Those who rely on limited views are fearful and irresolute; the faster they hurry, the slower they go.' })}/>
     <Button color="rgba(52, 52, 52, 0.5)" title="Verse 17" onPress={() => navigation.push('Verse',{texts: 'Clinging, they go too far, even an attachment to enlightenment is to go astray. Just let things be in their own way as they are, and there is neither coming nor going'})}/>
     <Button color="rgba(52, 52, 52, 0.5)" title="Verse 18" onPress={() => navigation.push('Verse',{texts: 'Be in harmony with the Way and you will be free of disturbances. Tied by your thoughts, you lose the truth, become heavy, dull, and unwell.' })}/>
     <Button color="rgba(52, 52, 52, 0.5)" title="Verse 19" onPress={() => navigation.push('Verse',{texts: 'Not well, the mind is troubled. Then why cling to or reject anything? If you wish to move in the One Way,do not dislike even the world of senses and ideas.'})}/>
     <Button color="rgba(52, 52, 52, 0.5)" title="Verse 20" onPress={() => navigation.push('Verse',{texts: 'Indeed, to accept them fully is identical with true Enlightenment. The wise attaches to no goals, but the foolish fetter themselves.' })}/>
     <Button color="rgba(52, 52, 52, 0.5)" title="Verse 21" onPress={() => navigation.push('Verse',{texts: 'There is but one Dharma, not many. Distinctions arise from the clinging needs of the ignorant. Using mind to stir up the mind is the original mistake. '})}/>
     <Button color="rgba(52, 52, 52, 0.5)" title="Verse 22" onPress={() => navigation.push('Verse',{texts: 'Peaceful and troubled derive from thinking; Enlightenment has no likes or dislikes. All dualities come from ignorant inference.' })}/>
     <Button color="rgba(52, 52, 52, 0.5)" title="Verse 23" onPress={() => navigation.push('Verse',{texts: 'They are like unto dreams or flowers in the air, the foolish try to grasp them. Gain and loss, right and wrong, abandon all such thoughts at once'})}/>
     <Button color="rgba(52, 52, 52, 0.5)" title="Verse 24" onPress={() => navigation.push('Verse',{texts: 'If the eye never sleeps, all dreams will naturally cease.If the mind makes no discriminations, all things are as they are, of One-essence.' })}/>
     <Button color="rgba(52, 52, 52, 0.5)" title="Verse 25" onPress={() => navigation.push('Verse',{texts: 'To understand the mystery of this One-essence is to be released from all entanglements. When all things are seen without differentiation, you return to the origin and remain what you are'})}/>
     <Button color="rgba(52, 52, 52, 0.5)" title="Verse 26" onPress={() => navigation.push('Verse',{texts: 'Consider the movement in stillness and the stationary in motion, both movement and rest disappear. When such dualities cease to exist even Oneness itself cannot exist.' })}/>
     <Button color="rgba(52, 52, 52, 0.5)" title="Verse 27" onPress={() => navigation.push('Verse',{texts: 'This ultimate state is not bound by rules and descriptions. For the Realized mind, at one with the Way, all doing ceases.'})}/>
     <Button color="rgba(52, 52, 52, 0.5)" title="Verse 27" onPress={() => navigation.push('Verse',{texts: 'This ultimate state is not bound by rules and descriptions. For the Realized mind, at one with the Way, all doing ceases.'})}/>
     <Button color="rgba(52, 52, 52, 0.5)"title="Verse 27" onPress={() => navigation.push('Verse',{texts: 'This ultimate state is not bound by rules and descriptions. For the Realized mind, at one with the Way, all doing ceases.'})}/>
     <Button color="rgba(52, 52, 52, 0.5)" title="Verse 28" onPress={() => navigation.push('Verse',{texts: 'Doubts and irresolutions vanish and the Truth is confirmed in you. With a single stroke you are freed from bondage; nothing clings to you and you hold onto nothing..' })}/>
     <Button color="rgba(52, 52, 52, 0.5)" title="Verse 29" onPress={() => navigation.push('Verse',{texts: 'All is void, clear, and self-illuminating, with no need to exert the mind. Here thinking, feeling, knowledge, and imagination are of no value.'})}/>
     <Button color="rgba(52, 52, 52, 0.5)" title="Verse 30" onPress={() => navigation.push('Verse',{texts: 'In this world of “as it really is” there is neither self nor other. To swiftly accord with that, only express nonduality.' })}/>
     <Button color="rgba(52, 52, 52, 0.5)" title="Verse 31" onPress={() => navigation.push('Verse',{texts: 'In this nonduality nothing is separate, nothing is excluded. The enlightened of all times and places have personally realized this truth.' })}/>
     <Button color="rgba(52, 52, 52, 0.5)" title="Verse 32" onPress={() => navigation.push('Verse',{texts: 'The Truth is beyond time and space, one instant is eternity. Not here, not therebut everywhere always right before your eyes '})}/>
     <Button color="rgba(52, 52, 52, 0.5)" title="Verse 33" onPress={() => navigation.push('Verse',{texts: 'Infinitely large and infinitely small, no difference, for definitions have vanished and no boundaries can be discerned. So too with “existence” and “non-existence.”' })}/>
     <Button color="rgba(52, 52, 52, 0.5)" title="Verse 34" onPress={() => navigation.push('Verse',{texts: 'Don’t waste time in arguments and discussion, attempting to grasp the ungraspable. One thing and everything move among and intermingle without distinction.'})}/>
     <Button color="rgba(52, 52, 52, 0.5)" title="Verse 35" onPress={() => navigation.push('Verse',{texts: 'To live in this Realization is to not worry about perfection or non-perfection. To put your trust in the Way is to live without separation, and in this nonduality you are one with the Way' })}/>
     <Button color="rgba(52, 52, 52, 0.5)" title="Verse 36" onPress={() => navigation.push('Verse',{texts: 'Words! Words! The Way is beyond language, Words never could, can not now, and never will describe the Way'})}/>
  </View>
  </ImageBackground>
  );
}

