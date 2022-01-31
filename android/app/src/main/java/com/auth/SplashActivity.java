package com.auth; //change your package name
import android.content.Intent;
import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;
public class SplashActivity extends AppCompatActivity {
     @Override
     protected void onCreate(Bundle savedInstanceState) {
     //     SplashScreen.show(this,true);
     //    SplashScreen.show(this, R.style.SplashTheme);
         super.onCreate(savedInstanceState);
         Intent intent = new Intent(this, MainActivity.class);
         startActivity(intent);
         finish();
     }
}