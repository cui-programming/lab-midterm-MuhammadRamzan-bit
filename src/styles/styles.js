import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  //  Global Container
  container: {
    flexGrow: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
  },

  section: {
    marginBottom: 25,
  },

  //  About Me Section
  aboutBox: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    elevation: 2,
  },
  aboutHeading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  aboutText: {
    fontSize: 16,
    marginBottom: 5,
  },

  //  Teacher Message / Headings
  teacherHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },

  //  Search & Add Section
  searchContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    elevation: 2,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  resultText: {
    fontSize: 16,
    marginVertical: 4,
  },

  //  Tasbih Counter Section
  tasbihContainer: {
    marginTop: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    elevation: 2,
  },
  tasbihItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
  },
  tasbihText: {
    flex: 2,
    fontSize: 16,
  },
  tasbihCount: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
  },
  buttonRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  //  FlatList-based Tasbih version
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 8,
    borderRadius: 8,
    elevation: 1,
  },
  itemName: { fontSize: 16, flex: 1 },
  counter: { fontSize: 18, fontWeight: 'bold', marginHorizontal: 10 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
});
