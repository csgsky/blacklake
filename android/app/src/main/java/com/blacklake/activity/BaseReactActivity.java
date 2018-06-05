package com.blacklake.activity;

import android.graphics.Color;
import android.os.Bundle;
import android.support.annotation.Nullable;

import com.blacklake.MainApplication;
import com.blacklake.R;
import com.facebook.react.ReactActivity;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import cn.bertsir.zbar.QrConfig;
import cn.bertsir.zbar.QrManager;

/**
 * Created by allen on 18/4/24.
 */

public class BaseReactActivity extends ReactActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    public void router(ReadableMap map) {
        String toPage = map.getString("toPage");
        String title = map.getString("title");
        if ("ScanA".equals(toPage)) {
            final QrConfig qrConfig = new QrConfig.Builder()
                    .setDesText("全新二维码必须扫码识别")//扫描框下文字
                    .setShowDes(true)//是否显示扫描框下面文字
                    .setShowLight(true)//显示手电筒按钮
                    .setShowTitle(true)//显示Title
                    .setShowAlbum(false)//显示从相册选择按钮
                    .setCornerColor(Color.WHITE)//设置扫描框颜色
                    .setLineColor(Color.WHITE)//设置扫描线颜色
                    .setLineSpeed(QrConfig.LINE_MEDIUM)//设置扫描线速度
                    .setScanType(QrConfig.TYPE_ALL)//设置扫码类型（二维码，条形码，全部，自定义，默认为二维码）
                    .setScanViewType(QrConfig.SCANVIEW_TYPE_QRCODE)//设置扫描框类型（二维码还是条形码，默认为二维码）
                    .setCustombarcodeformat(QrConfig.BARCODE_I25)//此项只有在扫码类型为TYPE_CUSTOM时才有效
                    .setPlaySound(true)//是否扫描成功后bi~的声音
                    .setIsOnlyCenter(true)//是否只识别框中内容(默认为全屏识别)
                    .setTitleText(title)//设置Tilte文字
                    .setTitleTextColor(Color.WHITE)//设置Title文字颜色
                    .setTitleBackgroudColor(getResources().getColor(R.color.black_00))
                    .create();

            QrManager
                    .getInstance()
                    .init(qrConfig)
                    .startScan(BaseReactActivity.this, result -> {
//                        Toast.makeText(BaseReactActivity.this, result, Toast.LENGTH_LONG).show();
                        WritableMap params = Arguments.createMap();
                        params.putString("result", result);
                        sendEvent(getReactContext(), "onScanningResult", params);
                    });

        }
    }

    protected ReactContext getReactContext() {
        MainApplication application = (MainApplication) getApplication();
        return application.getReactNativeHost().getReactInstanceManager().getCurrentReactContext();
    }

    private void sendEvent(ReactContext reactContext, String eventName, @Nullable WritableMap params) {
        reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, params);
    }
}
