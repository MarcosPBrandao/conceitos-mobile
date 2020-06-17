import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

import api from './services/api';

export default function App() {
  const [ projects, setProjects ] = useState([]);
  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    })
  }, []);
  return ( 
    <>
      <StatusBar barStyle='light-content' backgroundColor='#7159c1' />
      <SafeAreaView style={styles.container}>
      <FlatList
        data={projects}
        keyExtractor={project => project.id}
        renderItem={({ item: project }) => (
          <Text style={styles.project}>{project.title}</Text>
        )}
      />
      </SafeAreaView>
      {/* <View style={styles.container}>
         <Text style={styles.title}>Hello GoStack</Text>
         {projects.map(project => 
           <Text style={styles.project} key={project.id}>{project.title}</Text>
         )}
         </View>*/} 
    </>
  )
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       backgroundColor: '#7159c1',
   },
   project: {
    color: '#fff',
    fontSize: 28,
   },
   title: {
     color: '#fff',
     fontSize: 32,
     fontWeight: 'bold'
   }
});