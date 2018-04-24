package com.blacklake.activity;

import android.graphics.Color;
import android.widget.Toast;

import com.facebook.react.ReactActivity;
import com.facebook.react.bridge.ReadableMap;

import cn.bertsir.zbar.QrConfig;
import cn.bertsir.zbar.QrManager;

/**
 * Created by allen on 18/4/24.
 */

public class BaseReactActivity extends ReactActivity{

    public void router(ReadableMap map) {
        String toPage = map.getString("toPage");
        if ("ScanA".equals(toPage)) {
           QrConfig qrConfig = new QrConfig.Builder()
                   .setDesText("(识别二维码)")//扫描框下文字
                   .setShowDes(false)//是否显示扫描框下面文字
                   .setShowLight(true)//显示手电筒按钮
                   .setShowTitle(true)//显示Title
                   .setShowAlbum(true)//显示从相册选择按钮
                   .setCornerColor(Color.WHITE)//设置扫描框颜色
                   .setLineColor(Color.WHITE)//设置扫描线颜色
                   .setLineSpeed(QrConfig.LINE_MEDIUM)//设置扫描线速度
                   .setScanType(QrConfig.TYPE_QRCODE)//设置扫码类型（二维码，条形码，全部，自定义，默认为二维码）
                   .setScanViewType(QrConfig.SCANVIEW_TYPE_QRCODE)//设置扫描框类型（二维码还是条形码，默认为二维码）
                   .setCustombarcodeformat(QrConfig.BARCODE_I25)//此项只有在扫码类型为TYPE_CUSTOM时才有效
                   .setPlaySound(true)//是否扫描成功后bi~的声音
                   .setIsOnlyCenter(true)//是否只识别框中内容(默认为全屏识别)
                   .setTitleText("扫描二维码")//设置Tilte文字
                   .setTitleBackgroudColor(Color.BLUE)//设置状态栏颜色
                   .setTitleTextColor(Color.BLACK)//设置Title文字颜色
                   .create();
            QrManager
                    .getInstance()
                    .init(qrConfig)
                    .startScan(this, new QrManager.OnScanResultCallback() {
                        @Override
                        public void onScanSuccess(String result) {
                            Toast.makeText(BaseReactActivity.this, result, Toast.LENGTH_SHORT).show();
                        }
                    });
        }
    }
}
