package com.blacklake.activity;

import android.content.Intent;

import com.facebook.react.ReactActivity;
import com.facebook.react.bridge.ReadableMap;

/**
 * Created by allen on 18/4/24.
 */

public class BaseReactActivity extends ReactActivity{

    public void router(ReadableMap map) {
        String toPage = map.getString("toPage");
        if ("ScanA".equals(toPage)) {
            String name = map.getString("name");
            Intent intent = new Intent(this, CameraActivity.class);
            this.startActivity(intent);
        }
    }
}
