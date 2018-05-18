package com.blacklake.modules;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

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
}
