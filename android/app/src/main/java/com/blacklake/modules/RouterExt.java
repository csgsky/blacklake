package com.blacklake.modules;

import com.blacklake.activity.BaseReactActivity;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;

/**
 * Created by allen on 18/4/24.
 */

public class RouterExt extends ReactContextBaseJavaModule{
    public RouterExt(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @ReactMethod
    public void router(ReadableMap map) {
        BaseReactActivity activity = (BaseReactActivity) getCurrentActivity();
        activity.router(map);
    }

    @Override
    public String getName() {
        return "RouterExt";
    }
}
