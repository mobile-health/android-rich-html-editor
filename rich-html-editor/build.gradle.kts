plugins {
    alias(libs.plugins.manadr.deps)
    alias(libs.plugins.android.library)
    alias(libs.plugins.kotlin.android)
}

android {
    namespace = "com.infomaniak.lib.richhtmleditor"
    setupAndroidBasicConfigs()
    setupConsumeProguardFiles(project)
}

dependencies {
    implementation(libs.androidx.core.ktx)
}

kotlin { autoConfig() }
setupCompileTask()
