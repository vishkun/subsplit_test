import React from 'react';
import { StyleSheet, Button, TextInput, View, Text, Alert } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik';
import FlatButton from '../shared/button.js';
import * as yup from 'yup';
import details from './details.js';




    





const Schema=yup.object({
   
  id: yup.string()
  .required()
  .min(10),
  f_name:yup.string()
            .required(),
   l_name:yup.string()
            .required(),
   desc:yup.string()
            .required()        
  
})

export default function Form({ addDetails }) {

  return (
    
    <View style={globalStyles.container}>
      <Formik
         initialValues={{ id: '', f_name: '', l_name: '',desc:'' }}
          validationSchema={Schema}
          onSubmit={(values, actions) => {
           actions.resetForm(); 
          addDetails(values);
          
        }}
      >
        {props => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder='UNIQUE ID'
              onChangeText={props.handleChange('id')}
              onBlur={props.handleBlur('id')} 
              value={props.values.id} 
              
            />
            
            <Text style={globalStyles.errorText}>{props.errors.id}</Text>
           

            <TextInput
              style={globalStyles.input}
              
              placeholder='FIRST NAME'
              onChangeText={props.handleChange('f_name')}
              onBlur={props.handleBlur('f_name')}
              value={props.values.f_name}
            />
            <Text style={globalStyles.errorText}>{props.errors.f_name}</Text>

            <TextInput
              style={globalStyles.input}
              
              placeholder='LAST NAME'
              onChangeText={props.handleChange('l_name')}
              onBlur={props.handleBlur('l_name')}
              value={props.values.l_name}
            />
            <Text style={globalStyles.errorText}>{props.errors.l_name}</Text>

            <TextInput
              style={globalStyles.input}
              multiline minHeight={60}
              placeholder='DESCRIPTION'
              onChangeText={props.handleChange('desc')}
              onBlur={props.handleBlur('desc')}
              value={props.values.desc}
            />
            <Text style={globalStyles.errorText}>{props.errors.desc}</Text>
             
             <FlatButton onPress={props.handleSubmit} text='submit'/>
             
             
                
          </View>
        )}
      </Formik>
    </View>
    
  );
        }
 
//FUNCTION FOR CHECKING UNIQUE ALPHANUMERIC ID WHERE DSTR IS INPUT BY USER
  function check(dstr) 
{
      var dsum = 0;
    
      for (var i = 0; i < dstr.length; i++)
      {
    
        if (/[0-9]/.test(dstr[i])) dsum += parseInt(dstr[i])
      }
      const index =dsum; 
    
    
     var store=new Array(82);
     store.fill(0);
     console.log(store);
    
    
    
     if(store[index-1] == 0)
     {
       store[index-1] = 1;
       console.log(store);
       return true;
     }
     else
      //  console.log("Key not availabe");
       return false;
    }

    
