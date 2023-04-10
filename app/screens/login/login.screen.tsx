import React, {useState, useEffect} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {Card, Text, Button, TextInput, Checkbox} from 'react-native-paper';
import {Alert, SafeAreaView, View} from 'react-native';
import {loginStyle} from './login.style';
import SQLite from 'react-native-sqlite-storage';
import {User} from '../../models/user';
import TitleScreen from '../common/title/title.screen';

const db = SQLite.openDatabase(
  {
    name: 'MainDB',
    location: 'default',
  },
  () => {},
  (error: any) => {
    console.log(error);
  },
);

export default function LoginScreen({navigation}: any) {
  const [checked, setChecked] = React.useState(true);
  const [email, setEmail] = React.useState('ym');
  const [password, setPassword] = React.useState('123');
  const [user, setUser] = useState<User>();
  const db_email = 'ym';
  const db_pwd = '123';

  useEffect(() => {
    createTable();
    setData();
  }, []);

  const createTable = () => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS ' +
          'Users ' +
          '(Id INTEGER PRIMARY KEY AUTOINCREMENT,' +
          'Email TEXT NOT NULL,' +
          'Password TEXT NOT NULL' +
          ');',
      );
    });
  };
  const getData = () => {
    try {
      if (email.length == 0 || password.length == 0) {
        Alert.alert('Warning!', 'Please key in email and password');
      } else {
        db.transaction(tx => {
          tx.executeSql(
            'Select id, email, password From Users',
            [],
            (tx, results) => {
              var len = results.rows.length;
              if (len > 0) {
                if (email === db_email && password === db_pwd) {
                  var tempId = results.rows.item(0).Id;
                  var tempEmail = results.rows.item(0).Email;
                  var tempPwd = results.rows.item(1).Password;
                  const tempUser = new User(tempId, tempEmail, tempPwd);
                  setUser(tempUser);
                  navigation.navigate('Main', {name: email});
                } else {
                  Alert.alert('Warning!', 'Wrong Email or Password');
                }
              }
            },
          );
        });
      }
    } catch (error: any) {
      console.log(error);
    }
  };
  const setData = () => {
    try {
      db.transaction(tx => {
        tx.executeSql(
          'INSERT INTO Users(Email, Password) ' +
            "VALUES('" +
            db_email +
            "','" +
            db_pwd +
            "');",
        );
      });
    } catch (error: any) {
      console.log(error);
    }
  };
  return (
    <PaperProvider>
      <SafeAreaView style={loginStyle.content}>
        <View style={loginStyle.view}>
          <Card>
            <Card.Content>
              <TitleScreen />

              <TextInput
                style={{marginTop: 15}}
                label="Email"
                value={email}
                onChangeText={email => setEmail(email)}
                keyboardType="email-address"
                mode="outlined"
                left={<TextInput.Icon icon="email" />}
              />
              <TextInput
                style={{marginTop: 15}}
                label="Password"
                mode="outlined"
                secureTextEntry
                value={password}
                onChangeText={password => setPassword(password)}
                left={<TextInput.Icon icon="lock" />}
                right={<TextInput.Icon icon="eye" />}
              />
              <View style={loginStyle.checkboxContainer}>
                <Checkbox
                  color="rgb(70, 156, 5)"
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text style={loginStyle.remember_lbl}>Remember me?</Text>
              </View>
              <View>
                <Button
                  mode="contained"
                  style={loginStyle.login}
                  onPress={() => navigation.navigate('Main', {name: email})}>
                  Login
                </Button>
                <Button mode="text" labelStyle={loginStyle.forget_pwd}>
                  Forget Password?
                </Button>
              </View>
            </Card.Content>
          </Card>
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}
