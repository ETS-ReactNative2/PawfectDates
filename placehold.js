
const CreateProfile = () => {
    return ( 
      <Formik
  initialValues={{ 
      dogName: "",
      personName: "",
      city: "",
      about: "",
      likes: "",
      dislikes: ""
       }}
  onSubmit={ async (values) => await db.collection("users").add(values)}>
  {({ handleChange, handleBlur, handleSubmit, values }) => (
  <View style={styles.container}>
  <View style={styles.inputContainer}>
  <Text>My Name is:</Text>
   <TextInput
     onChangeText={handleChange('dogName')}
     onBlur={handleBlur('dogName')}
     value={values.dogName}
     style={styles.input}
   />
   <Text>My Person's Name is:</Text>
   <TextInput
     onChangeText={handleChange('personName')}
     onBlur={handleBlur('personName')}
     value={values.personName}
     style={styles.input}
   />
   <Text>You Can Find Me Here:</Text>
   <TextInput
     onChangeText={handleChange('city')}
     onBlur={handleBlur('city')}
     value={values.city}
     style={styles.input}
   />
   <Text>A Little Bit About Me:</Text>
   <TextInput
     onChangeText={handleChange('about')}
     onBlur={handleBlur('about')}
     value={values.about}
     style={styles.input}
   />
   <Text>Things I Like:</Text>
   <TextInput
     onChangeText={handleChange('likes')}
     onBlur={handleBlur('likes')}
     value={values.likes}
     style={styles.input}
   />
   <Text>Things I Don't Like:</Text>
   <TextInput
     onChangeText={handleChange('dislikes')}
     onBlur={handleBlur('dislikes')}
     value={values.dislikes}
     style={styles.input}
   />
   <TouchableOpacity style={styles.button} onPress={handleSubmit} title="Submit">
       <Text style={styles.buttonText}>Register</Text>
   </TouchableOpacity>
  </View>
  </View>
  )}
  </Formik>
     );
  }
   