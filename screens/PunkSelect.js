import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {incNumber, decNumber} from '../actions/index';
import {TouchableRipple} from 'react-native-paper';
import Punk from '../components/Punk';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';

const PunkSelect = ({navigation}) => {
  const myState = useSelector(state => state.changeTheNumber);
  const dispatch = useDispatch();

  return (
    <View style={styles.mainpunkcontainer}>
      <View style={styles.header}>
        <Text style={styles.headertxt}>Select Your Punk</Text>
        <TouchableRipple
          onPress={() => console.log('Pressed')}
          rippleColor="rgba(0, 0, 0, .1)"
          borderless
          style={styles.premiumripple}>
          <FontAwesome5
            name="crown"
            size={20}
            style={{color: '#DE7800'}}></FontAwesome5>
        </TouchableRipple>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.content}>
            <TouchableOpacity style={styles.touchable}>
              <Punk url="https://lh3.googleusercontent.com/n1o3oyP9kvaqOe0OK-TudxZatl-BHmpBKouTBfu-HZINiJlBjLyu8iuQHKQu_M55GdJXc6hKfz0Qm0MijRyhw-N0o8Hxz5__-hnEq_k=w361"></Punk>
            </TouchableOpacity>
            <TouchableOpacity>
              <Punk url="https://lh3.googleusercontent.com/IgVOK4q_FUD_7btAwnTGHj2j-lEHns_c_Wp_U65pyOKizKEanEfllcMYuqf9DA9Q9U2Njh9RpeZ564lIPDQAqrXO_Qj_JhxQIn9BDQ=w600"></Punk>
            </TouchableOpacity>
            <TouchableOpacity>
              <Punk url="https://lh3.googleusercontent.com/0OoksnjXAMBls-iwfCY8Pt0Tx_a4-SAaHViZqZzjCp-t3GgegT7eiOyv6YChVP87OHTCE0KtZAR_tWPGCDCtYv53W0-dc0Z3bx1_7Yo=w352"></Punk>
            </TouchableOpacity>
            <TouchableOpacity>
              <Punk url="https://lh3.googleusercontent.com/3lEQhiuqTQKL1aKLP6lZjopHist9cn1Nk_sb8rJj774ulkHcbep-JA9XUzm1K6kS2zp9POOGzXQDnXa79tWgZkK8ZasSbDNvOMGKjO4=w352"></Punk>
            </TouchableOpacity>
            <TouchableOpacity>
              <Punk url="https://lh3.googleusercontent.com/HY-zJL54tAa5JmMBljCFgYa5BS53u4PpBuazdxdIwYed7sq88W2cJitkxrCM9toCxzPStz-Mmq8C0y-GUPmO-B3W581RGyAbVrfI=w352"></Punk>
            </TouchableOpacity>
            <TouchableOpacity>
              <Punk
                url="https://lh3.googleusercontent.com/bNDUM9lyasoFwKi8HGCqWJB_efk9OK6qJHyb5W4v2FK7YHs__4rvbzaQeZcXfaZBDi2NkpdrWTZZxUAEdSpL8IrOnIjF607y8m8FUA=w352"
                selected></Punk>
            </TouchableOpacity>
            <TouchableOpacity>
              <Punk url="https://lh3.googleusercontent.com/20CtYJV5V3duS33SH3MguDsySMFaKBOxs3c5bx6ILh9HDzNsJCcutuwnGBpXfmoVZbU3oRDiG5LKkaH4BJdl8XpM=w352"></Punk>
            </TouchableOpacity>
            <TouchableOpacity>
              <Punk url="https://lh3.googleusercontent.com/8ZG2Ui1p1kb2H1IKGBH1jdf6NOqhFnivQGt4AdzOxqTL4lq2ZrgO3R03XbL5wck_3apPDBBPHiFCZf_TlVwMs0sW=w352"></Punk>
            </TouchableOpacity>
            <TouchableOpacity>
              <Punk url="https://lh3.googleusercontent.com/_Gx16WJOI5-ZT0lYAS53krlp-MrnCn0rjj4qzGexkUTpRvG2ze4z4LyMi1WmVLWORQ6hfm14HEr6DL4rIgyWeXKN=w352"></Punk>
            </TouchableOpacity>
            <TouchableOpacity>
              <Punk url="https://lh3.googleusercontent.com/CDymI80Emt25rK90kvsONBOjQbsgg34Z5YrQq5yroAMRwqf4iELLsyA5IIZez_qiWhmXDMFeZBqdba62rMpuj8wGOM1a6FgZI8vmHw=w352"></Punk>
            </TouchableOpacity>
            <TouchableOpacity>
              <Punk url="https://lh3.googleusercontent.com/BecNRhOvPEzT4QqnKjogzVoYUbUoswqZYzcrGsUxL0_dPyBKhsYs3tRBnPzccIKwz4gohXKtHnTKp5inLLjlb6bLS3oToTOOWuBOgg=w352"></Punk>
            </TouchableOpacity>
            <TouchableOpacity>
              <Punk url="https://lh3.googleusercontent.com/95rGda3_jzAls7uMAuFzG7tCINLrU3XUkAbXqbE-_uaS50zP_JzIhou-cfXr-8q4X6x_O_DUE4tDczdWjxTiqe12t5CV4ah0G3P28Q=w352"></Punk>
            </TouchableOpacity>
            <TouchableOpacity>
              <Punk url="https://lh3.googleusercontent.com/xxRPF763wk_MRirraHhcI7WpWianZNlnEzqT49XSGA1BvkDEIUVxe0eFlxjhHwKqvC3ejZXyjISd4sARhPm1iPJe_BjSUggcYn2E=w352"></Punk>
            </TouchableOpacity>
            <TouchableOpacity>
              <Punk url="https://lh3.googleusercontent.com/DsOEz1GCOdms2i7YDoH976ie1iQRYp3ATpu_CHddlBbCYfT0KX0neWEY1pHJEFIPR-o-M1eYEQY5rcPYqBNPe5oiXtl6YDjaExq1kC0=w352"></Punk>
            </TouchableOpacity>
            <TouchableOpacity>
              <Punk url="https://lh3.googleusercontent.com/KSnb4NVWUO8RVfW69scs-v7QY_18cy48KSdnDy6ABsflXneyDiOYaqBBMj4XBhJ6RSzHSwOeO1g2Qmrwkf6Fz9iezMc6rOlFjJ9cEw=w352"></Punk>
            </TouchableOpacity>
            <TouchableOpacity>
              <Punk url="https://lh3.googleusercontent.com/UXYlPoGO2eMqu3tUm1PRYbKe8MSlTG8B2dKCzCjy_yRkMDeWWhonziE7D9cqGce6IX1qQD5NMztVkdTzOhqC4Q=w352"></Punk>
            </TouchableOpacity>
            <TouchableOpacity>
              <Punk url="https://lh3.googleusercontent.com/q_RdocbApKe4bC4iPIrpuoyEecrRsuADyuOsJbClUXJo2ZWUOcMDuN1Jmn-hYUixZwFjz2CwlaOxSdSYB4pv4kNQnCi5jyBr8Y61qg=w352"></Punk>
            </TouchableOpacity>
            <TouchableOpacity>
              <Punk url="https://lh3.googleusercontent.com/ptTrpLIRKPSJ1d9V2fMo-u6QvcjvltlhlHDPp5Tq7kPgbEJKXkTy7YxiHV5nrs2K1L_xVHZr-c5YpbGNLFP6U0cCTigAQBPfRjYA=w352"></Punk>
            </TouchableOpacity>
            <TouchableOpacity>
              <Punk url="https://lh3.googleusercontent.com/vek8tuenWSxhReCXV7zuNWoubxxz8hdTfhBtysIUMVjHpJbs_2b6dOA2JDYcWfFuylopXRrC8KABKUfDpm392vLcMj2Temgji95QMA=w352"></Punk>
            </TouchableOpacity>
            <TouchableOpacity>
              <Punk url="https://lh3.googleusercontent.com/ikq1DRYH3TAPcpIwJzVCzMd_xVNiqeocALtSVTmYQ4RgGG648VyzHdg1ojJv77rsTDqnG1Iu88JI_NvsxDCC2aY7QzA0GEONzb9I=w352"></Punk>
            </TouchableOpacity>
            <TouchableOpacity>
              <Punk url="https://lh3.googleusercontent.com/Y1Rt_T-xd_83XCFqLktaLboDKn3pPW6vXFoW9OivBTWvP6AJ75gKtSI8j5774GfusD5cJd9yYwPzu-gG1gUIQCc=w352"></Punk>
            </TouchableOpacity>
            <TouchableOpacity>
              <Punk url="https://lh3.googleusercontent.com/pgqGTkxG8m6i8AN7glVzewNJWKQMdDbJZEaSzpG-5MZAFe9l3IKZB6wMgioT1gJ2XaNAX4Hp0Y22gi6OzY_fAIsftfgZFU29W4fPtSs=w352"></Punk>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={() => dispatch(decNumber())}
          style={styles.buttonprevious}>
          <Text style={styles.buttonprevioustxt}>Previous</Text>
        </TouchableOpacity>

        <View style={styles.buttonnext}>
          <Text
            style={styles.buttonnexttxt}
            onPress={() => dispatch(incNumber())}>
            Next
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PunkSelect;

const P100 = '100%';

const P40 = '30%';

const styles = StyleSheet.create({
  mainpunkcontainer: {
    flex: 1,
    // backgroundColor: '#F65F69',
  },
  header: {
    height: 50,
    // backgroundColor: '#FFFF',
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
  },
  premiumripple: {
    marginRight: 15,
    marginTop: -10,
    color: '#DE7800',
    padding: 10,
    borderRadius: 50,
    // backgroundColor: '#F65F65',
  },
  content: {
    flex: 1,
    // backgroundColor: '#F65F69',
    // display: 'flex',
    flex: 1,
    flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'flex-start',
    // width: P100,
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 30,
    paddingRight: 10,
  },
  headertxt: {
    fontSize: 17,
    fontFamily: 'Poppins-Medium',
    marginLeft: 20,
    color: '#000000',
  },
  buttonprevioustxt: {
    alignSelf: 'center',
    color: '#000000',
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
  },
  buttonnexttxt: {
    alignSelf: 'center',
    color: '#FFFF',
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    // backgroundColor: '#696969',
    width: P100,
    paddingTop: 5,
    paddingBottom: 15,
    height: 70,
    // position: 'absolute',
    // bottom: 0,
  },
  buttonprevious: {
    height: 40,
    width: P40,
    backgroundColor: '#FFFF',
    alignSelf: 'center',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginRight: 10,
  },
  buttonnext: {
    height: 40,
    width: P40,
    backgroundColor: '#3E3C9C',
    alignSelf: 'center',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginLeft: 10,
  },
  touchable: {},
});
