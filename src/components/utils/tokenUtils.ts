import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';
import Cookies from 'js-cookie';

export default class TokenStorage {
  static async storeToken(token: string): Promise<void> {
    try {
      if (Platform.OS === 'web') {
        Cookies.set('token', token);
      } else {
        await SecureStore.setItemAsync('token', token);
      }
    } catch (erro) {
      console.error('Erro ao guardadr o token: ', erro);
    }
  }

  static async getToken(): Promise<string | null> {
    try {
      if (Platform.OS === 'web') {
        return Cookies.get('token') || null
      } else {
        return await SecureStore.getItemAsync('token')
      }
    } catch (erro) {
      console.error('Erro ao buscar o token:', erro)
      return null
    }
  }

  static async deleteToken(): Promise<void> {
    try {
      if (Platform.OS === 'web') {
        Cookies.remove('token');
      } else {
        await SecureStore.deleteItemAsync('token');
      }
    } catch (erro) {
      console.error('Erro ao deletar o token:', erro);
    }
  }
}