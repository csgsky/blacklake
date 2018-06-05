package com.blacklake.modules;

import android.content.Intent;
import android.widget.Toast;

import com.blacklake.MainActivity;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import cn.bertsir.zbar.QRActivity;

/**
 * Created by allen on 18/4/26.
 */

public class HelperExt extends ReactContextBaseJavaModule {
    public HelperExt(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "HelperExt";
    }


    @ReactMethod
    public void finishActivity() {
        Toast.makeText(getCurrentActivity(), "接口调用成功", Toast.LENGTH_LONG).show();
        if (getCurrentActivity() instanceof MainActivity) {
            Intent intent = new Intent(QRActivity.FINISH_ACTIVITY);
            getCurrentActivity().sendBroadcast(intent);
        }
    }

    @ReactMethod
    public void reScanQrCode() {
        if (getCurrentActivity() instanceof MainActivity) {
            Intent intent = new Intent(QRActivity.RE_SCAN_QRCODE);
            getCurrentActivity().sendBroadcast(intent);
        }
    }
}
