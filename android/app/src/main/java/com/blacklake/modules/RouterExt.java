package com.blacklake.modules;

import android.widget.Toast;

import com.blacklake.activity.BaseReactActivity;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.yanzhenjie.permission.AndPermission;
import com.yanzhenjie.permission.Permission;

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
        AndPermission.with(activity)
                .runtime()
                .permission(Permission.CAMERA)
                .onGranted(permission -> activity.router(map))
                .onDenied(permission -> Toast.makeText(activity, "拒绝权限", Toast.LENGTH_LONG).show())
                .start();


    }

    @Override
    public String getName() {
        return "RouterExt";
    }
}
