import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    height: 70,
    width: 80,
    resizeMode: 'contain',
  },
  middleContainer: {
    flex: 1, //the middle container will take the rest of the screen because the others take a fix width
    marginHorizontal: 10,
  },
  type: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#484648',
  },
  time: {
    color: '#9a989c',
  },
  rightContainer: {
    width: 100,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 5,
    color: '#484648',
  },
});
export default styles;
