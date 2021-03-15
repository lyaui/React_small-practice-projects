// 將全部東西以 firebase 的名稱引入
import * as firebase from 'firebase/app';
// 將用來儲存圖片檔案庫引入
import 'firebase/storage';
// 將儲存資料的資料庫引入
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCfzMKsmbrxadphW165WcyeXfgvFojge8w',
  authDomain: 'firegram-b9227.firebaseapp.com',
  projectId: 'firegram-b9227',
  storageBucket: 'firegram-b9227.appspot.com',
  messagingSenderId: '971874054723',
  appId: '1:971874054723:web:b6252a900f1bea9d1d5af6',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// 啟用 storage 和 firestore, timestam;的服務然後輸出
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
