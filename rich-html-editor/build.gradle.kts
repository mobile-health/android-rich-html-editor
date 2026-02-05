plugins {
    alias(libs.plugins.manadr.deps)
    alias(libs.plugins.android.library)
}

android {
    namespace = "com.infomaniak.lib.richhtmleditor"
    setupAndroidBasicConfigs()
    setupConsumeProguardFiles(project)
}

dependencies {
    implementation(libs.androidx.core.ktx)
    api(project(":logger"))
}

kotlin { autoConfig() }
setupCompileTask()
