import React, { useEffect, useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import TrackPlayer, { Capability, usePlaybackState } from 'react-native-track-player';

const setupPlayer = async () => {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.updateOptions({
        stoppingAppPausesPlayback: true,
        capabilities: [
            Capability.Play,
            Capability.Pause,
            Capability.SkipToNext,
            Capability.SkipToPrevious,
        ],
    });

    await TrackPlayer.add([
        { id: '1', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', title: 'Bài hát 1', artist: 'Ca sĩ A' },
        { id: '2', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', title: 'Bài hát 2', artist: 'Ca sĩ B' },
        { id: '3', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3', title: 'Bài hát 3', artist: 'Ca sĩ C' }
    ]);
};

const Bai3lab4 = () => {
    const playbackState = usePlaybackState();
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        setupPlayer();
    }, []);

    const handlePlayPause = async () => {
        if (isPlaying) {
            await TrackPlayer.pause();
        } else {
            await TrackPlayer.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Trình phát nhạc</Text>
            <Button title={isPlaying ? "Dừng nhạc" : "Phát nhạc"} onPress={handlePlayPause} />
            <View style={styles.buttonRow}>
                <Button title="Bài trước" onPress={() => TrackPlayer.skipToPrevious()} />
                <Button title="Bài tiếp theo" onPress={() => TrackPlayer.skipToNext()} />
            </View>
        </View>
    );
};

export default Bai3lab4;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    buttonRow: {
        flexDirection: 'row',
        marginTop: 20,
        gap: 10,
    },
});
