import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: '100%',
  },
  textInput: {
    padding: 10,
    backgroundColor: '#eee',
    marginVertical: 5,
    marginLeft: 20,
    backgroundColor: '#e9e9e9',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  iconContainer: {
    backgroundColor: '#a5a4a5',
    padding: 5,
    borderRadius: 50,
    marginRight: 15,
  },
  locationText: {},
  separator: {
    backgroundColor: '#e9e9e9',
    height: 1,
  },
  listView: {
    position: 'absolute',
    top: 105,
  },
  autoCompleteContainer: {
    position: 'absolute',
    top: 0,
    left: 10,
    right: 10,
  },
  circle: {width: 5,
    height: 5,
    backgroundColor: 'black',
    position: 'absolute',
    top: 30,
    left: 15,
  borderRadius:5,
},
  line: {
    width: 1,
    height: 49,
    backgroundColor: '#bebebe',
    position: 'absolute',
    top: 35,
    left: 17,

  },
  square: {
    width: 5,
    height: 5,
    backgroundColor: 'black',
    position: 'absolute',
    top: 80,
    left: 15,
  },
});
export default styles;
